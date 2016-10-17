class AddMetraToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :tm_p_tzami1, :float
    add_column :orders, :tm_u_tzami1, :float
    add_column :orders, :tm_p_tzami2, :float
    add_column :orders, :tm_u_tzami2, :float
    add_column :orders, :tm_p_pd1, :float
    add_column :orders, :tm_u_pd1, :float
    add_column :orders, :tm_p_pd2, :float
    add_column :orders, :tm_u_pd2, :float
    add_column :orders, :tm_p_pd3, :float
    add_column :orders, :tm_u_pd3, :float
    add_column :orders, :tm_p_pa1, :float
    add_column :orders, :tm_u_pa1, :float
    add_column :orders, :tm_p_pa2, :float
    add_column :orders, :tm_u_pa2, :float
    add_column :orders, :tm_p_pa3, :float
    add_column :orders, :tm_u_pa3, :float
    add_column :orders, :tm_p_pp1, :float
    add_column :orders, :tm_u_pp1, :float
    add_column :orders, :tm_p_pp2, :float
    add_column :orders, :tm_u_pp2, :float
    add_column :orders, :tm_p_pp3, :float
    add_column :orders, :tm_u_pp3, :float
    add_column :orders, :tm_p_pk1, :float
    add_column :orders, :tm_u_pk1, :float
    add_column :orders, :tm_p_pk2, :float
    add_column :orders, :tm_u_pk2, :float
    add_column :orders, :tm_p_pk3, :float
    add_column :orders, :tm_u_pk3, :float
    add_column :orders, :tm_p_t1, :float
    add_column :orders, :tm_u_t1, :float
  end
end
