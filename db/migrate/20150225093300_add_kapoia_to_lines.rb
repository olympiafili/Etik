class AddKapoiaToLines < ActiveRecord::Migration
  def change
    add_column :lines, :epivarinsi_line, :float
    add_column :lines, :epivarinsi_lastixo, :float
    add_column :lines, :koimeno, :text
    add_column :lines, :name_allo, :text
    add_column :lines, :yes, :int
    add_column :lines, :direct_img, :text
  end
end
