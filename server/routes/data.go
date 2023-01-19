package routes

import (
	"server/handlers"
	postgresql "server/pkg"
	"server/repositories"

	"github.com/gorilla/mux"
)

func RouteInit(r *mux.Router) {
	DataRoutes(r)
}

func DataRoutes(r *mux.Router) {
	dataRepository := repositories.RepositoryData(postgresql.DB)
	h := handlers.HandlerData(dataRepository)

	r.HandleFunc("/Data", h.FindData).Methods("GET")
	r.HandleFunc("/Data/{id}", h.GetData).Methods("GET")
	r.HandleFunc("/Data", h.CreateData).Methods("POST")
	r.HandleFunc("/Data/{id}", h.UpdateData).Methods("PATCH")
	r.HandleFunc("/Data/{id}", h.DeleteData).Methods("DELETE")
}
