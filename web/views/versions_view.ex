defmodule ProjectsStatistics.VersionsView do
  use ProjectsStatistics.Web, :view

  def render("index.json", %{versions: versions}) do
    %{ versions: versions }
  end
end
