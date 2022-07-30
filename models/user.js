import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const User = sequelize.define("usuarios", {
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate:{
            isAlpha:{
                msg: "El id solo puede contener letras"
            },
            len:{
                args:[4,50],
                msg:"El id debe poseer un minimo de 4 caracteres y un maximo de 50"
            }
        }
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:{
                msg:"El email tiene que ser valido"
            }
        }
    },

    pass:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:{
                args:[4, 50],
                msg:"La password debe poseer un minimo de 4 caracteres y un maximo de 50"
            }
        }
    },
})