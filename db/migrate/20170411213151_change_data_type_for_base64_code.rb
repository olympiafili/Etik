class ChangeDataTypeForBase64Code < ActiveRecord::Migration
  def self.up
    change_table :orders do |t|
      t.change :base64_code, :blob
    end
  end
  def self.down
    change_table :orders do |t|
      t.change :base64_code, :longblob
    end
  end
end
