--Database: JSTest

-- DROP DATABASE "JSTest";
CREATE TABLE public."Users"
(
    "id" serial,
    username character varying(30) NOT NULL UNIQUE,
    email character varying(320) NOT NULL UNIQUE,
    location character varying(100),
    avatar bytea,
    bio text,
    "createdAt" date,
    "updatedAt" date,
    PRIMARY KEY ("id")
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public."Users"
    OWNER to postgres;


--user followers
CREATE TABLE "Users_Followers"
(
    "id" serial,
    user_id int not null,
	follower_id int not null,
    "createdAt" date,
    "updatedAt" date,
    PRIMARY KEY ("id"),
	FOREIGN KEY (user_id) REFERENCES "Users" (id),
	FOREIGN KEY (follower_id) REFERENCES "Users" (id)
)
WITH (
    OIDS = FALSE
);

--repositories 
CREATE TABLE "Repositories"
(
    "id" serial,
	owner_id int not null,
    name character varying(100) not null,
	description text,
	is_public boolean not null,
	slug character varying(100),
    "createdAt" date,
    "updatedAt" date,
    PRIMARY KEY ("id"),
	FOREIGN KEY (owner_id) REFERENCES "Users" (id)
)
WITH (
    OIDS = FALSE
);

--stars

CREATE TABLE "Stars"
(
    "id" serial,
	voter_id int not null,
    repo_id int not null,
	amount_of_stars NUMERIC(2, 1) not null,
    "createdAt" date,
    "updatedAt" date,
    PRIMARY KEY ("id"),
	FOREIGN KEY (voter_id) REFERENCES "Users" (id),
	FOREIGN KEY (repo_id) REFERENCES "Repositories" (id)
)
WITH (
    OIDS = FALSE
);