defmodule ProjectsStatistics.Schema do
  use Absinthe.Schema

  alias ProjectsStatistics.{ProjectResolver, VersionResolver}

  import_types ProjectsStatistics.Schema.Types

  query do
    field :project, type: :project do
      arg :id, non_null(:id)
      resolve &ProjectResolver.find/2
    end

    field :projects, list_of(:project) do
      resolve &ProjectResolver.all/2
    end

    field :version, type: :version do
      arg :id, non_null(:id)
      resolve &VersionResolver.find/2
    end
  end
end
