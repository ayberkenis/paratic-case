/*
Bu SQL dosyası, sadece case için örnek bir veritabanı yapısını oluşturmak için kullanılacaktır.
Bu dosya, veritabanı yapısını oluşturmak için kullanılacak olan SQL sorgularını içermektedir.

SQL sorgularını bu şekilde bir dosyada tutmak, normalde tercih edilen güvenli bir yöntem değildir.
Bu dosya sadece ama sadece sorguların nasıl oluşturulduğunu göstermek amacıyla oluşuturulmuştur.
*/
CREATE TABLE users (id INT PRIMARY KEY AUTO_INCREMENT,
                                       username VARCHAR(50) NOT NULL,
                                                            avatar VARCHAR(100),
                                                                   last_online DATETIME,
                                                                   last_comment INT, password VARCHAR(100) NOT NULL,
                                                                                                           email VARCHAR(100) NOT NULL,
                                                                                                                              email_verified BOOLEAN, register_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                                                                                                                                                                           login_timestamp TIMESTAMP,
                                                                                                                                                                                                           update_timestamp TIMESTAMP,
                                                                                                                                                                                                                            commented_timestamp TIMESTAMP);


CREATE TABLE threads (id INT PRIMARY KEY AUTO_INCREMENT,
                                         title VARCHAR(255) NOT NULL,
                                                            author_id INT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      FOREIGN KEY (author_id) REFERENCES users(id));


CREATE TABLE comments (id INT PRIMARY KEY AUTO_INCREMENT,
                                          content TEXT NOT NULL,
                                                       thread_id INT, author_id INT, commented_at DATETIME,
                                                                                     timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       FOREIGN KEY (thread_id) REFERENCES threads(id),
                       FOREIGN KEY (author_id) REFERENCES users(id));

