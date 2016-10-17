class AddEpivarinsigriLastixaToLines < ActiveRecord::Migration
  def change
    add_column :lines, :epivarinsi_gri, :float
  end
end
