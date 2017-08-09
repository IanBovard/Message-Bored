::migrations set-up::

DROP DATABASE message_bored;
DROP USER bored;
CREATE USER bored WITH LOGIN PASSWORD 'password';
CREATE DATABASE message_bored WITH OWNER bored;

sequelize model:create --name users --attributes username:string
sequelize model:create --name topics --attributes title:string
sequelize model:create --name messages --attributes body:string
add allowNull to migrations and models
sequelize db:migrate

::funny-data::

                    ::public.users::
INSERT INTO users (username, "createdAt", "updatedAt") VALUES ('Zero', now(), now());
INSERT INTO users (username, "createdAt", "updatedAt") VALUES ('Megaman', now(), now());
INSERT INTO users (username, "createdAt", "updatedAt") VALUES ('Protoman', now(), now());
INSERT INTO users (username, "createdAt", "updatedAt") VALUES ('Rush', now(), now());
INSERT INTO users (username, "createdAt", "updatedAt") VALUES ('Bass', now(), now());

                    ::public.topics::
::Zero id1::
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Wheres rock?', now(), now(), 1);
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Why am i not in smash bros?', now(), now(), 1);
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Getting tired of red, whats next?', now(), now(), 1);

::Megaman id2::
INSERT INTO topics (title, "createdAt", "updatedAt", "Topics_created_by_fkey") VALUES ('Why do i keep forgetting all of my moves?', now(), now(), 2);
INSERT INTO topics (title, "createdAt", "updatedAt", "Topics_created_by_fkey") VALUES ('Lookin for a robot master to chill with', now(), now(), 2);
INSERT INTO topics (title, "createdAt", "updatedAt", "Topics_created_by_fkey") VALUES ('Problems with having dog/jet/mechasuit', now(), now(), 2);

::Protoman id3::
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Whistling tutorial', now(), now(), 3);
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('How to rock a scarf like a boss tutorial', now(), now(), 3);
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Slide how-to', now(), now(), 3);

::Rush id4::
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Ruff Ruff!', now(), now(), 4);
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Woof woof?', now(), now(), 4);
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('pant pant...', now(), now(), 4);


::Bass id5::
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Keeping treble out of trouble', now(), now(), 5);
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Looking for helmets with spikes', now(), now(), 5);
INSERT INTO topics (title, "createdAt", "updatedAt", "created_by") VALUES ('Where are my games? Cameos at least!', now(), now(), 5);