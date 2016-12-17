defmodule ProjectsStatistics.PageController do
  use ProjectsStatistics.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
