/*
Bu SQL dosyası, sadece case için örnek bir veritabanı yapısını oluşturmak için kullanılacaktır.
Bu dosya, veritabanı yapısını oluşturmak için kullanılacak olan SQL sorgularını içermektedir.

SQL sorgularını bu şekilde bir dosyada tutmak, normalde tercih edilen güvenli bir yöntem değildir.
Bu dosya sadece ama sadece sorguların nasıl oluşturulduğunu göstermek amacıyla oluşuturulmuştur.
 */
CREATE TABLE
        users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                username VARCHAR(50) NOT NULL,
                avatar VARCHAR(100),
                last_online DATETIME,
                last_comment INT,
                password VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                email_verified BOOLEAN,
                register_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                login_timestamp TIMESTAMP,
                update_timestamp TIMESTAMP,
                commented_timestamp TIMESTAMP
        );

CREATE TABLE
        threads (
                id INT PRIMARY KEY AUTO_INCREMENT,
                title VARCHAR(255) NOT NULL,
                author_id INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (author_id) REFERENCES users (id)
        );

CREATE TABLE
        comments (
                id INT PRIMARY KEY AUTO_INCREMENT,
                content TEXT NOT NULL,
                thread_id INT,
                author_id INT,
                commented_at DATETIME,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                featured BOOLEAN,
                exchange_code VARCHAR(50),
                FOREIGN KEY (thread_id) REFERENCES threads (id),
                FOREIGN KEY (author_id) REFERENCES users (id)
        );

CREATE TABLE
        currency_data (
                _id VARCHAR(10) PRIMARY KEY,
                Description VARCHAR(255),
                Last DECIMAL(10, 4),
                Open DECIMAL(10, 4),
                High DECIMAL(10, 4),
                Low DECIMAL(10, 4),
                Bid DECIMAL(10, 4),
                Ask DECIMAL(10, 4),
                DailyChange DECIMAL(10, 4),
                DailyChangePercent DECIMAL(10, 2),
                WeeklyChange DECIMAL(10, 4),
                WeeklyChangePercent DECIMAL(10, 2),
                MonthlyChange DECIMAL(10, 4),
                MonthlyChangePercent DECIMAL(10, 2),
                YearlyChange DECIMAL(10, 4),
                YearlyChangePercent DECIMAL(10, 2),
                Direction INT,
                DailyDirection INT,
                Volatility DECIMAL(10, 2),
                PreviousClose DECIMAL(10, 4),
                PreviousWeekClose DECIMAL(10, 4),
                PreviousMonthClose DECIMAL(10, 4),
                PreviousYearClose DECIMAL(10, 4),
                WOWPreviousClose DECIMAL(10, 4),
                MOMPreviousClose DECIMAL(10, 4),
                YOYPreviousClose DECIMAL(10, 4),
                LegacyCode VARCHAR(20),
                Code VARCHAR(10),
                DateTime BIGINT,
                WOWLow DECIMAL(10, 4),
                WOWHigh DECIMAL(10, 4),
                MOMLow DECIMAL(10, 4),
                MOMHigh DECIMAL(10, 4),
                YOYLow DECIMAL(10, 4),
                YOYHigh DECIMAL(10, 4),
                WTDLow DECIMAL(10, 4),
                WTDHigh DECIMAL(10, 4),
                WTDLowDate BIGINT,
                WTDHighDate BIGINT,
                MTDLow DECIMAL(10, 4),
                MTDHigh DECIMAL(10, 4),
                MTDLowDate BIGINT,
                MTDHighDate BIGINT,
                YTDLow DECIMAL(10, 4),
                YTDHigh DECIMAL(10, 4),
                YTDLowDate BIGINT,
                YTDHighDate BIGINT,
                pageID VARCHAR(20)
        );

CREATE INDEX idx_currency_data_code ON currency_data (Code);

CREATE TABLE
        banks (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                image VARCHAR(255),
                description TEXT,
                added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

CREATE TABLE
        bank_rates (
                id INT PRIMARY KEY AUTO_INCREMENT,
                bank_id INT,
                exchange_code VARCHAR(10),
                buy_rate DECIMAL(10, 4),
                sell_rate DECIMAL(10, 4),
                spread_rate DECIMAL(10, 4),
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (bank_id) REFERENCES banks (id),
                FOREIGN KEY (exchange_code) REFERENCES currency_data (Code)
        );