defmodule ProjectsStatistics.ProjectsView do
  use ProjectsStatistics.Web, :view

  def render("index.json", %{projects: projects}) do
    %{ projects: projects }
  end
end
