class AddLangStartToRolaEpiks < ActiveRecord::Migration
  def change
    add_column :rola_epiks, :en, :string
    add_column :rola_epiks, :de, :string
    add_column :rola_epiks, :gr, :string
  end
end
