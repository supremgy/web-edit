import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'prgms_notes',
  dateStrings: true,
  port: 30036,
});

export default connection;
