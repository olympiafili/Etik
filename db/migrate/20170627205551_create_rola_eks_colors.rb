class CreateRolaEksColors < ActiveRecord::Migration
  def change
    create_table :rola_eks_colors do |t|
      t.string :name
      t.string :sungate_code
      t.float :price

      t.timestamps
    end
  end
end
