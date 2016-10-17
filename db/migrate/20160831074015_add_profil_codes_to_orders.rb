class AddProfilCodesToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :pd1_code, :string
    add_column :orders, :pd2_code, :string
    add_column :orders, :pd3_code, :string
    add_column :orders, :pa1_code, :string
    add_column :orders, :pa2_code, :string
    add_column :orders, :pa3_code, :string
    add_column :orders, :pp1_code, :string
    add_column :orders, :pp2_code, :string
    add_column :orders, :pp3_code, :string
    add_column :orders, :pk1_code, :string
    add_column :orders, :pk2_code, :string
    add_column :orders, :pk3_code, :string
  end
end
