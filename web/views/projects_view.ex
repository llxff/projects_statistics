defmodule ProjectsStatistics.ProjectsView do
  use ProjectsStatistics.Web, :view

  def render("index.json", %{projects: projects}) do
    %{ projects: projects }
  end

  def render("show.json", %{project: project}) do
    %{ project: project }
  end

  def render("error.json", _) do
    %{ error: "Не удалось создать проект" }
  end
end
