::migrations set-up::

DROP DATABASE message_bored;
DROP USER bored;
CREATE USER bored WITH LOGIN PASSWORD 'password';
CREATE DATABASE message_bored WITH OWNER bored;

sequelize model:create --name users --attributes username:string,password:string
sequelize model:create --name topics --attributes title:string
sequelize model:create --name messages --attributes body:string
add allowNull to migrations and models
add unique constraint to models
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

                      ::public.messages::
::Zero id1::
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('Pineapple pleasure cruise', now(), now(), 1, 1);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('Glass cannon economics', now(), now(), 1, 2);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('Bagel basket surprise', now(), now(), 1, 3);


::Megaman id2::

INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('GIT GUD! BRO!', now(), now(), 2, 4);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('GIT GUD! BRAH!', now(), now(), 2, 5);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('GIT GUD! BRUH!', now(), now(), 2, 6);


::Protoman id3::

INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('a/s/l?', now(), now(), 3, 7);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('a/s/l? please?', now(), now(), 3, 8);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('a/s/l? pretty please?', now(), now(), 3, 9);

::Rush id4::

INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('woof woof woof', now(), now(), 4, 10);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('ruff ruff', now(), now(), 4, 11);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values ('grrrRrrRRRrrrR', now(), now(), 4, 12);

::Bass id5::

INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values (':(', now(), now(), 5, 1);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values (':)', now(), now(), 5, 4);
INSERT INTO messages (body, "createdAt", "updatedAt", "author_id", "topic_id") Values (':o', now(), now(), 5, 9);





'use strict';
module.exports = function(sequelize, DataTypes) {
  var messages = sequelize.define('messages', {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'messages'
  });
  messages.associate = function(models) {
    messages.belongsTo(models.topics,  {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
    messages.belongsTo(models.users,  {
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };
  return messages;
};





'use strict';
module.exports = function(sequelize, DataTypes) {
  var topics = sequelize.define('topics', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'topics'
  });
  topics.associate = function(models) {
    topics.belongsTo(models.users,  {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
    topics.hasMany(models.messages,  {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
  };
  return topics;
};




'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
   users.associate = function(models) {
    users.hasMany(models.topics,  {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
    users.hasMany(models.messages,  {
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };
  return users;
};