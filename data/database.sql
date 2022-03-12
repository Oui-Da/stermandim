DROP TABLE IF EXISTS player CASCADE;
DROP TABLE IF EXISTS game CASCADE;



CREATE TABLE player (
    id integer CONSTRAINT playerPK PRIMARY KEY
);

CREATE TABLE game (
    id integer CONSTRAINT gamePK PRIMARY KEY,
    word integer(4)
);
