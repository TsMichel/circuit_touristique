-- Création de la base de données
CREATE DATABASE circuit_touristique;

-- Connexion à la base de données
\c circuit_touristique;

-- Table des touristes
CREATE TABLE tourists (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des agences
CREATE TABLE agencies (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des circuits touristiques (liée aux agences)
CREATE TABLE circuits (
    id SERIAL PRIMARY KEY,
    region VARCHAR(100) NOT NULL,
    activity_type VARCHAR(100) NOT NULL,
    itinerary TEXT NOT NULL,
    duration INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    max_group_size INT NOT NULL,
    languages VARCHAR(100) NOT NULL,
    agency_id INT REFERENCES agencies(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des réservations (liée aux touristes)
CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    circuit_id INT REFERENCES circuits(id) ON DELETE SET NULL,
    tourist_id INT REFERENCES tourists(id) ON DELETE SET NULL,
    reservation_date DATE NOT NULL,
    number_of_people INT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des avis et commentaires (liée aux touristes)
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    circuit_id INT REFERENCES circuits(id) ON DELETE SET NULL,
    tourist_id INT REFERENCES tourists(id) ON DELETE SET NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des messages (messagerie entre touristes et agences)
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES tourists(id) ON DELETE SET NULL,
    receiver_id INT REFERENCES agencies(id) ON DELETE SET NULL,
    message_text TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index pour améliorer les performances
CREATE INDEX idx_circuits_region ON circuits(region);
CREATE INDEX idx_reservations_tourist_id ON reservations(tourist_id);
CREATE INDEX idx_reviews_tourist_id ON reviews(tourist_id);
CREATE INDEX idx_messages_sender_id ON messages(sender_id);
CREATE INDEX idx_messages_receiver_id ON messages(receiver_id);

-- Insertion de données de test (optionnel)
INSERT INTO tourists (email, password_hash, name) VALUES
('tourist1@example.com', 'hashedpassword1', 'Jean Dupont'),
('tourist2@example.com', 'hashedpassword2', 'Marie Curie');

INSERT INTO agencies (email, password_hash, name) VALUES
('agency1@example.com', 'hashedpassword3', 'Agence Touristique Paris'),
('agency2@example.com', 'hashedpassword4', 'Agence Touristique Lyon');

INSERT INTO circuits (region, activity_type, itinerary, duration, price, max_group_size, languages, agency_id) VALUES
('Paris', 'Culture', 'Tour Eiffel, Louvre', 2, 150.00, 10, 'FR, EN', 1),
('Lyon', 'Histoire', 'Vieux Lyon, Fourvière', 1, 80.00, 15, 'FR, EN', 2);

INSERT INTO reservations (circuit_id, tourist_id, reservation_date, number_of_people) VALUES
(1, 1, '2025-07-15', 2),
(2, 2, '2025-07-20', 3);

INSERT INTO reviews (circuit_id, tourist_id, rating, comment) VALUES
(1, 1, 4, 'Très bon circuit, à recommander!'),
(2, 2, 5, 'Expérience exceptionnelle!');

INSERT INTO messages (sender_id, receiver_id, message_text) VALUES
(1, 1, 'Pouvez-vous confirmer ma réservation ?'),
(2, 2, 'Merci pour le circuit, très satisfait !');

-- Accord des privilèges (optionnel, ajuster selon votre configuration)
GRANT ALL PRIVILEGES ON DATABASE circuit_touristique TO your_username;