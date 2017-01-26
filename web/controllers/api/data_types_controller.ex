defmodule ProjectsStatistics.DataTypesController do
  use ProjectsStatistics.Web, :controller

  alias ProjectsStatistics.DataType

  def index(conn, _params) do
    conn
    |> put_status(:ok)
    |> render("index.json", data_types: Repo.all(DataType))
  end
end
