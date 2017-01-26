defmodule ProjectsStatistics.DataView do
  use ProjectsStatistics.Web, :view

  def render("index.json", %{data: data}) do
    %{ data: data }
  end
end
