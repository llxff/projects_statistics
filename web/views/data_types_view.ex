defmodule ProjectsStatistics.DataTypesView do
  use ProjectsStatistics.Web, :view

  def render("index.json", %{data_types: data_types}) do
    %{ data_types: data_types }
  end
end
