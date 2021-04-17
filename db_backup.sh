docker cp ./db_backup.sh strapi-template_postgres_1:/
docker exec -i strapi-template_postgres_1 pg_dumpall -U strapi > ./backup_name.sql