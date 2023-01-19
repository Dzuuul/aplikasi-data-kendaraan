package repositories

import (
	"server/models"

	"gorm.io/gorm"
)

type repository struct {
	db *gorm.DB
}

type DataRepository interface {
	FindData() ([]models.Data, error)
	GetData(ID int) (models.Data, error)
	CreateData(data models.Data) (models.Data, error)
	UpdateData(data models.Data, ID int) (models.Data, error)
	DeleteData(data models.Data, ID int) (models.Data, error)
}

func RepositoryData(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindData() ([]models.Data, error) {
	var data []models.Data
	err := r.db.Find(&data).Error

	return data, err
}

func (r *repository) GetData(ID int) (models.Data, error) {
	var data models.Data
	err := r.db.First(&data, ID).Error

	return data, err
}

func (r *repository) CreateData(data models.Data) (models.Data, error) {
	err := r.db.Create(&data).Error

	return data, err
}

func (r *repository) UpdateData(data models.Data, ID int) (models.Data, error) {
	err := r.db.Save(&data).Error

	return data, err
}

func (r *repository) DeleteData(data models.Data, ID int) (models.Data, error) {
	err := r.db.Delete(&data).Error

	return data, err
}
