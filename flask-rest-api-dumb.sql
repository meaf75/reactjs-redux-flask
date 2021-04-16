PGDMP     (    '                y            flask-rest-api    11.11    11.11                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    16484    flask-rest-api    DATABASE     �   CREATE DATABASE "flask-rest-api" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Colombia.1252' LC_CTYPE = 'Spanish_Colombia.1252';
     DROP DATABASE "flask-rest-api";
             postgres    false            �            1259    16566    alembic_version    TABLE     X   CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);
 #   DROP TABLE public.alembic_version;
       public         postgres    false            �            1259    16587    application_events    TABLE     �   CREATE TABLE public.application_events (
    id integer NOT NULL,
    description character varying(150) NOT NULL,
    creation_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
 &   DROP TABLE public.application_events;
       public         postgres    false            �            1259    16585    application_events_id_seq    SEQUENCE     �   CREATE SEQUENCE public.application_events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.application_events_id_seq;
       public       postgres    false    200                       0    0    application_events_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.application_events_id_seq OWNED BY public.application_events.id;
            public       postgres    false    199            �            1259    16573    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    lastname character varying(150) NOT NULL,
    mail character varying(150) NOT NULL,
    username character varying(150) NOT NULL,
    hashed_password character varying(150) NOT NULL
);
    DROP TABLE public.users;
       public         postgres    false            �            1259    16571    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       postgres    false    198                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
            public       postgres    false    197            �
           2604    16590    application_events id    DEFAULT     ~   ALTER TABLE ONLY public.application_events ALTER COLUMN id SET DEFAULT nextval('public.application_events_id_seq'::regclass);
 D   ALTER TABLE public.application_events ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    200    199    200            �
           2604    16576    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    197    198                      0    16566    alembic_version 
   TABLE DATA               6   COPY public.alembic_version (version_num) FROM stdin;
    public       postgres    false    196   |                 0    16587    application_events 
   TABLE DATA               L   COPY public.application_events (id, description, creation_date) FROM stdin;
    public       postgres    false    200   �                 0    16573    users 
   TABLE DATA               T   COPY public.users (id, name, lastname, mail, username, hashed_password) FROM stdin;
    public       postgres    false    198   �                  0    0    application_events_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.application_events_id_seq', 71, true);
            public       postgres    false    199                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 15, true);
            public       postgres    false    197            �
           2606    16570 #   alembic_version alembic_version_pkc 
   CONSTRAINT     j   ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);
 M   ALTER TABLE ONLY public.alembic_version DROP CONSTRAINT alembic_version_pkc;
       public         postgres    false    196            �
           2606    16593 *   application_events application_events_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.application_events
    ADD CONSTRAINT application_events_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.application_events DROP CONSTRAINT application_events_pkey;
       public         postgres    false    200            �
           2606    16583    users users_mail_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_mail_key UNIQUE (mail);
 >   ALTER TABLE ONLY public.users DROP CONSTRAINT users_mail_key;
       public         postgres    false    198            �
           2606    16581    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    198                  x�KL1O�4�06N1L����� .           x����n7���S�4�/�Ye��.�v��Ɏ�X
d9���p�E��5�}�s�sϹCW������o��{3��9߶�O�v=\כ���a�k�������9l�W���$}C<�4r-�LT���e�����'}���m��v���S��đ�p� ��=s�ZX5���������q��&԰:7�_�?��;|}۾��7�ۧ������p������Ϳp��F��ݬp��p�EcS��K���v�����us�!�G��ZC�Jf|�1�+XF��
'4�v#����**T��hk'�5�H ꇖ1�H�U�l��Y�`���-��h-j���Eb�]�j/��I��PdN��b?!>�-�L�5P?%>�K��s��ih�Q)��Dh����67�;���H�����x���u�#���������p�/���Zc1/ZSG��&s�L
��*F�cJQ�הw�ɨY\\댳�w���t�X���m) ��G�HR�X``}��#�W �H���,  ���I���/�ͤ�K�/IG_�Id�RU�ї&�(RjA���M�T#Wc�7�U�EB��A:���T�;���4�q�E�p���1��͙��4���$e8�t4��h59�F���`��)jW162!�#�RЮb<�3U������\
���Z�c*�ł��"��$����ZZn��{k�J�u%�W��-�X_�U�W�0���(fqH<ŭ�@���l�_�b9�nRK�E:|�ZEm�ș�� %RvS6�� [9Rd��,���N�C*q�WD=�c�19&Nmq��Ӗ����`u��Q/Oހ����6�⨗[�e�kV ��k1J/�����E�1�=���E8C�ш����/¡a)Rr�>{e��4��9��3����0�_�#9�\���\�����KE�38�7ɃP���t��@2�]68�m��j�����3��<��X�pL�����>ku*����g��Q��p��Y��E:fR��%!�ܳ�g/�e9<N1��7{��G         E  x�m�Ɏ�H�s�uC������1���Y�iO?��K����R~��>�<Eq��-/�GG�?צ���6��3�||R�O@}���ͪ�{��~+v�ꦶ�Y�O�*�y�: �Y��<F=¨�@��_��"Dݨ�[�j{_�c����r&sv;S�7#u�{��}�r��3�Y!�7��l�>��>W[�lW�JU� �r�[1#��0� ��GOqYV�ӳ��+�~��/J��u}�(6���6RT�+��0�4fD�6n�	�cV��3�\u������/[a��Kړ��,w��[��W��$QJ�W|��"��Z��u����0̐��y�<K�>��],e��)F�[G��¾A����Ax.�jj&�ßh��o�3�C�4^&���� jg(�&ƭ��/�����*��q�m^(=�!�,E���A��t'H����'Nu&a�J��(�e~����a�&�\D��r���2�~x��NC��aR[����.�>�H��U}I]rڊi�qw�o�4�P�G"���q��^=��F��L��
����O�^�ףK_�c����M�q��z�9F?B�����\��O��� ��i6�� ��k��T�=��Y�4J	��L����}��GN����nqin �҈���o6o�U�|+}���F�>ۅ�{m;���@!G��7厸����M�r�����_��cB. 16垆7'�"+JR�<��ؕ �,;K9M�j|���`�T
����e�����E�w47rr��:�'�=R��뮍�=w}��P��V�+!�%�ͽ��5N��Oð���K     