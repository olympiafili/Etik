class AddKapoiaToColors < ActiveRecord::Migration
  def change
    add_column :colors, :katigoria, :int
    add_column :colors, :mia_pleura, :float
    add_column :colors, :duo_pleura, :float
  end
end
