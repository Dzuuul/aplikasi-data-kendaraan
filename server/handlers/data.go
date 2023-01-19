package handlers

import (
	"encoding/json"
	"net/http"
	"server/models"
	"server/repositories"
	"strconv"

	"github.com/gorilla/mux"
)

type handler struct {
	DataRepository repositories.DataRepository
}

func HandlerData(DataRepository repositories.DataRepository) *handler {
	return &handler{DataRepository}
}

func (h *handler) FindData(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	data, err := h.DataRepository.FindData()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := models.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
	}

	w.WriteHeader(http.StatusOK)
	response := models.SuccessResult{Code: http.StatusOK, Data: data}
	json.NewEncoder(w).Encode(response)
}

func (h *handler) GetData(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	data, err := h.DataRepository.GetData(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := models.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := models.SuccessResult{Code: http.StatusOK, Data: convertResponse(data)}
	json.NewEncoder(w).Encode(response)
}

func (h *handler) CreateData(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	request := new(models.CreateDataRequest)

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := models.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	data := models.Data{
		NoReg:      request.NoReg,
		Pemilik:    request.Pemilik,
		Alamat:     request.Alamat,
		Merk:       request.Merk,
		Tahun:      request.Tahun,
		Silinder:   request.Silinder,
		Warna:      request.Warna,
		BahanBakar: request.BahanBakar,
	}

	data, err := h.DataRepository.CreateData(data)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
	}

	w.WriteHeader(http.StatusOK)
	response := models.SuccessResult{Code: http.StatusOK, Data: convertResponse(data)}
	json.NewEncoder(w).Encode(response)
}

func (h *handler) UpdateData(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	request := new(models.UpdateDataRequest)
	if err := json.NewDecoder(r.Body).Decode(request); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := models.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	data, err := h.DataRepository.GetData(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := models.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	if request.NoReg != "" {
		data.NoReg = request.NoReg
	}

	if request.Pemilik != "" {
		data.Pemilik = request.Pemilik
	}

	if request.Alamat != "" {
		data.Alamat = request.Alamat
	}

	if request.Merk != "" {
		data.Merk = request.Merk
	}

	if request.Tahun != 0 {
		data.Tahun = request.Tahun
	}

	if request.Silinder != 0 {
		data.Silinder = request.Silinder
	}

	if request.Warna != "" {
		data.Warna = request.Warna
	}

	if request.BahanBakar != "" {
		data.BahanBakar = request.BahanBakar
	}

	dataData, err := h.DataRepository.UpdateData(data, id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := models.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := models.SuccessResult{Code: http.StatusOK, Data: convertResponse(dataData)}
	json.NewEncoder(w).Encode(response)

}

func (h *handler) DeleteData(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	data, err := h.DataRepository.GetData(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := models.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	data, err = h.DataRepository.DeleteData(data, id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := models.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := models.SuccessResult{Code: http.StatusOK, Data: convertResponse(data)}
	json.NewEncoder(w).Encode(response)
}

func convertResponse(u models.Data) models.DataResponse {
	return models.DataResponse{
		ID:         u.ID,
		NoReg:      u.NoReg,
		Pemilik:    u.Pemilik,
		Alamat:     u.Alamat,
		Merk:       u.Merk,
		Tahun:      u.Tahun,
		Silinder:   u.Silinder,
		Warna:      u.Warna,
		BahanBakar: u.BahanBakar,
	}
}
