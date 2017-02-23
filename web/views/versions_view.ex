defmodule ProjectsStatistics.VersionsView do
  use ProjectsStatistics.Web, :view

  def render("show.json", %{version: version}) do
    %{ version: version }
  end

  def render("error.json", _) do
    %{ error: "Не удалось создать версию" }
  end
end
