class AddMiaPleuraSecToColors < ActiveRecord::Migration
  def change
    add_column :colors, :mia_pleura_sec, :float
  end
end
