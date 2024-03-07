export const EnvConfig = () => ({
    enviroment: process.env.NODE_ENV || 'DEV',
    mongodb: process.env.MONGO_DB,
    port: process.env.PORT || 3001,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7
})