package models

type Data struct {
	ID         int    `json:"id" gorm:"primary_key;auto_increment"`
	NoReg      string `json:"noRegis" gorm:"not null"`
	Pemilik    string `json:"pemilik" form:"pemilik" gorm:"type: varchar(255);not null"`
	Alamat     string `json:"alamat" gorm:"type:text" form:"alamat"`
	Merk       string `json:"merk" form:"merk"`
	Tahun      int    `json:"tahun" form:"tahun" gorm:"type:int"`
	Silinder   int    `json:"silinder" form:"silinder" gorm:"type:int"`
	Warna      string `json:"warna" form:"warna" gorm:"type: varchar(255)"`
	BahanBakar string `json:"bahanBakar" form:"bahanBakar" gorm:"type: varchar(255)"`
}

type DataResponse struct {
	ID         int    `json:"id" gorm:"primary_key;auto_increment"`
	NoReg      string `json:"noRegis"`
	Pemilik    string `json:"pemilik"`
	Alamat     string `json:"alamat"`
	Merk       string `json:"merk"`
	Tahun      int    `json:"tahun"`
	Silinder   int    `json:"silinder"`
	Warna      string `json:"warna"`
	BahanBakar string `json:"bahanBakar"`
}

type CreateDataRequest struct {
	ID         int    `json:"id" gorm:"primary_key;auto_increment"`
	NoReg      string `json:"noRegis" gorm:"not null"`
	Pemilik    string `json:"pemilik" form:"pemilik" gorm:"type: varchar(255);not null"`
	Alamat     string `json:"alamat" gorm:"type:text" form:"alamat"`
	Merk       string `json:"merk" form:"merk"`
	Tahun      int    `json:"tahun" form:"tahun" gorm:"type:int"`
	Silinder   int    `json:"silinder" form:"silinder" gorm:"type:int"`
	Warna      string `json:"warna" form:"warna" gorm:"type: varchar(255)"`
	BahanBakar string `json:"bahanBakar" form:"bahanBakar" gorm:"type: varchar(255)"`
}

type UpdateDataRequest struct {
	ID         int    `json:"id" gorm:"primary_key;auto_increment"`
	NoReg      string `json:"noRegis" gorm:"not null"`
	Pemilik    string `json:"pemilik" form:"pemilik" gorm:"type: varchar(255);not null"`
	Alamat     string `json:"alamat" gorm:"type:text" form:"alamat"`
	Merk       string `json:"merk" form:"merk"`
	Tahun      int    `json:"tahun" form:"tahun" gorm:"type:int"`
	Silinder   int    `json:"silinder" form:"silinder" gorm:"type:int"`
	Warna      string `json:"warna" form:"warna" gorm:"type: varchar(255)"`
	BahanBakar string `json:"bahanBakar" form:"bahanBakar" gorm:"type: varchar(255)"`
}

func (DataResponse) TableName() string {
	return "data"
}

type SuccessResult struct {
	Code int         `json:"code"`
	Data interface{} `json:"data"`
}

type ErrorResult struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}
