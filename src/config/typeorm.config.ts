import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '$eaLand@123',
    database: 'sealand_db',
    entities: [],
    synchronize: true,
}