package database

import (
	"fmt"

	"server/models"
	postgresql "server/pkg"
)

func RunMigration() {
	err := postgresql.DB.AutoMigrate(
		&models.Data{},
	)

	if err != nil {
		fmt.Println(err)
		panic("Migration Failed")
	}

	fmt.Println("Migration Success")
}
