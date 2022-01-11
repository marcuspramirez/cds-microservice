// this file stores the "cd" model (model is table schema in sequelize lingo)

// inputs: sequelize instance and DT Class, returns: a cd Model object
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'cd' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "cds"
    const cd = sequelize.define('cd', {
        id: { // the id will be our primary key for accessing cd data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        initialBalance: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        currentBalance: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        remainingTerm: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        interestRate: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        liquid: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })

    return cd
}

     