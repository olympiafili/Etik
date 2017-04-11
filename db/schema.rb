# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160719070630075818) do

  create_table "audits", force: true do |t|
    t.integer  "auditable_id"
    t.string   "auditable_type"
    t.integer  "associated_id"
    t.string   "associated_type"
    t.integer  "user_id"
    t.string   "user_type"
    t.string   "username"
    t.string   "action"
    t.text     "audited_changes"
    t.integer  "version",         default: 0
    t.string   "comment"
    t.string   "remote_address"
    t.string   "request_uuid"
    t.datetime "created_at"
  end

  add_index "audits", ["associated_id", "associated_type"], name: "associated_index", using: :btree
  add_index "audits", ["auditable_id", "auditable_type"], name: "auditable_index", using: :btree
  add_index "audits", ["created_at"], name: "index_audits_on_created_at", using: :btree
  add_index "audits", ["request_uuid"], name: "index_audits_on_request_uuid", using: :btree
  add_index "audits", ["user_id", "user_type"], name: "user_index", using: :btree

  create_table "cat_panels", force: true do |t|
    t.string   "name"
    t.string   "panel"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "sungate_code"
  end

  create_table "cat_tzamia", force: true do |t|
    t.text     "name"
    t.text     "code"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "category"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "color_teams", force: true do |t|
    t.string   "color_team_name"
    t.float    "epivarinsi",      limit: 24
    t.text     "colors"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "colors", force: true do |t|
    t.string   "image"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "code"
    t.integer  "katigoria"
    t.float    "mia_pleura",   limit: 24
    t.float    "duo_pleura",   limit: 24
    t.text     "sungate_in"
    t.text     "sungate_out"
    t.text     "sungate_both"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "constructors", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "desc"
    t.text     "systems"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "eksoterikas", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "epikathimenos", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "glass_cat_in_outs", force: true do |t|
    t.string   "name"
    t.string   "code"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "lista"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "glass_cat_ins", force: true do |t|
    t.string   "name"
    t.string   "code"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "lista"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "glass_cat_outs", force: true do |t|
    t.string   "name"
    t.string   "code"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "lista"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "istorikos", force: true do |t|
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "leafs", force: true do |t|
    t.string   "name"
    t.string   "image"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "lines", force: true do |t|
    t.text     "name"
    t.string   "image"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "epivarinsi_line",     limit: 24
    t.float    "epivarinsi_lastixo",  limit: 24
    t.text     "koimeno"
    t.text     "name_allo"
    t.integer  "yes"
    t.text     "direct_img"
    t.text     "sungate_description"
    t.text     "sungate_code"
    t.float    "epivarinsi_gri",      limit: 24
    t.integer  "porta"
    t.text     "open_types"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "material_constructors", force: true do |t|
    t.integer  "material_id"
    t.integer  "constructor_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "materials", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image"
    t.text     "constructors"
    t.text     "color_team"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "open_categorie_leafs", force: true do |t|
    t.integer  "open_categorie_id"
    t.integer  "leaf_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "open_categories", force: true do |t|
    t.string   "name"
    t.string   "image"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "leaf"
    t.integer  "order"
    t.integer  "default"
    t.string   "systems"
    t.string   "sungate_code"
  end

  create_table "open_types", force: true do |t|
    t.string   "name"
    t.integer  "max_height"
    t.integer  "min_height"
    t.integer  "max_width"
    t.integer  "min_width"
    t.string   "image"
    t.integer  "leaf_id"
    t.integer  "open_categorie_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "code",              limit: 24
    t.integer  "order"
    t.string   "csv"
    t.text     "table"
    t.string   "sungate_code"
  end

  create_table "orders", force: true do |t|
    t.integer  "user_id"
    t.text     "open_categorie_id"
    t.text     "material_id"
    t.text     "constructor_id"
    t.text     "system_id"
    t.text     "line_id"
    t.integer  "leaf_id"
    t.text     "main_color_id"
    t.text     "leaf_color_id"
    t.text     "right_color_id"
    t.text     "left_color_id"
    t.text     "up_color_id"
    t.text     "down_color_id"
    t.text     "open_type_id"
    t.float    "width",                      limit: 24
    t.float    "height",                     limit: 24
    t.float    "price",                      limit: 24
    t.float    "price_extra",                limit: 24
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "posotoita"
    t.string   "rolo"
    t.string   "color_rolou"
    t.float    "xwrisma1",                   limit: 24
    t.float    "xwrisma2",                   limit: 24
    t.float    "xwrisma3_1",                 limit: 24
    t.float    "xwrisma3_2",                 limit: 24
    t.float    "xwrisma3_3",                 limit: 24
    t.string   "persida"
    t.string   "color_persidas"
    t.float    "price_update",               limit: 24
    t.float    "price_sum",                  limit: 24
    t.float    "price_new",                  limit: 24
    t.float    "height_new",                 limit: 24
    t.integer  "lastixo"
    t.text     "profil_panw"
    t.text     "profil_katw"
    t.text     "profil_deksia"
    t.text     "profil_aristera"
    t.integer  "posotita_p"
    t.integer  "posotita_k"
    t.integer  "posotita_d"
    t.integer  "posotita_a"
    t.text     "tzamia"
    t.text     "typos"
    t.text     "color_typos"
    t.text     "image"
    t.text     "odoigos"
    t.text     "color_odoigou"
    t.integer  "in_out"
    t.integer  "pse"
    t.text     "color_profil_d"
    t.text     "color_profil_a"
    t.text     "color_profil_p"
    t.text     "color_profil_k"
    t.float    "width_new",                  limit: 24
    t.integer  "istoriko_id"
    t.float    "price_rolou",                limit: 24
    t.float    "price_odoigou",              limit: 24
    t.float    "price_persidas",             limit: 24
    t.float    "price_tzamiou",              limit: 24
    t.float    "price_profil",               limit: 24
    t.float    "price_tupou",                limit: 24
    t.string   "canvas"
    t.float    "xwrisma_y_1",                limit: 24
    t.float    "xwrisma_y_2",                limit: 24
    t.text     "profil_deksia_1"
    t.text     "profil_deksia_2"
    t.text     "profil_deksia_3"
    t.integer  "profil_deksia_arithmos_1"
    t.integer  "profil_deksia_arithmos_2"
    t.integer  "profil_deksia_arithmos_3"
    t.float    "timi_profil_deksia_1",       limit: 24
    t.float    "timi_profil_deksia_2",       limit: 24
    t.float    "timi_deksia_profil_3",       limit: 24
    t.text     "profil_aristera_1"
    t.text     "profil_aristera_2"
    t.text     "profil_aristera_3"
    t.integer  "profil_aristera_arithmos_1"
    t.integer  "profil_aristera_arithmos_2"
    t.integer  "profil_aristera_arithmos_3"
    t.float    "timi_profil_aristera_1",     limit: 24
    t.float    "timi_profil_aristera_2",     limit: 24
    t.float    "timi_profil_aristera_3",     limit: 24
    t.text     "profil_panw_1"
    t.text     "profil_panw_2"
    t.text     "profil_panw_3"
    t.integer  "profil_panw_arithmos_1"
    t.integer  "profil_panw_arithmos_2"
    t.text     "profil_panw_arithmos_3"
    t.float    "timi_profil_panw_1",         limit: 24
    t.float    "timi_profil_panw_2",         limit: 24
    t.float    "timi_profil_panw_3",         limit: 24
    t.text     "profil_katw_1"
    t.text     "profil_katw_2"
    t.text     "profil_katw_3"
    t.integer  "profil_katw_arithmos_1"
    t.integer  "profil_katw_arithmos_2"
    t.integer  "profil_katw_arithmos_3"
    t.float    "timi_profil_katw_1",         limit: 24
    t.float    "timi_profil_katw_2",         limit: 24
    t.float    "timi_profil_katw_3",         limit: 24
    t.text     "typos_katw_1"
    t.text     "typos_katw_2"
    t.text     "typos_katw_3"
    t.integer  "typos_katw_arithmos_1"
    t.integer  "typos_katw_arithmos_2"
    t.integer  "typos_katw_arithmos_3"
    t.float    "timi_typos_katw_1",          limit: 24
    t.float    "timi_typos_katw_2",          limit: 24
    t.float    "timi_typos_katw_3",          limit: 24
    t.integer  "paraggelia_id"
    t.string   "lastixa"
    t.text     "prostasia_name"
    t.float    "prostasia_price",            limit: 24
    t.text     "tzamia2"
    t.float    "price_tzamiou2",             limit: 24
    t.float    "pl_rolou_ep",                limit: 24
    t.float    "up_rolou_ep",                limit: 24
    t.float    "pl_rolou_ek",                limit: 24
    t.float    "up_rolou_ek",                limit: 24
    t.float    "pl_persidas",                limit: 24
    t.float    "up_persidas",                limit: 24
    t.float    "up_odigou",                  limit: 24
    t.text     "kinisi_deksia_aristera"
    t.integer  "aukson"
    t.text     "sxolia"
    t.float    "timi_m_tzami1",              limit: 24
    t.float    "timi_m_tzami2",              limit: 24
    t.float    "timi_m_epik",                limit: 24
    t.float    "timi_m_ekso",                limit: 24
    t.float    "timi_m_persidas",            limit: 24
    t.float    "timi_m_odoigou",             limit: 24
    t.float    "timi_m_p_d_1",               limit: 24
    t.float    "timi_m_p_d_2",               limit: 24
    t.float    "timi_m_p_d_3",               limit: 24
    t.float    "timi_m_p_a_1",               limit: 24
    t.float    "timi_m_p_a_2",               limit: 24
    t.float    "timi_m_p_a_3",               limit: 24
    t.float    "timi_m_p_p_1",               limit: 24
    t.float    "timi_m_p_p_2",               limit: 24
    t.float    "timi_m_p_p_3",               limit: 24
    t.float    "timi_m_p_k_1",               limit: 24
    t.float    "timi_m_p_k_2",               limit: 24
    t.float    "timi_m_p_k_3",               limit: 24
    t.float    "timi_m_t_1",                 limit: 24
    t.float    "tm_p_tzami1",                limit: 24
    t.float    "tm_u_tzami1",                limit: 24
    t.float    "tm_p_tzami2",                limit: 24
    t.float    "tm_u_tzami2",                limit: 24
    t.float    "tm_p_pd1",                   limit: 24
    t.float    "tm_u_pd1",                   limit: 24
    t.float    "tm_p_pd2",                   limit: 24
    t.float    "tm_u_pd2",                   limit: 24
    t.float    "tm_p_pd3",                   limit: 24
    t.float    "tm_u_pd3",                   limit: 24
    t.float    "tm_p_pa1",                   limit: 24
    t.float    "tm_u_pa1",                   limit: 24
    t.float    "tm_p_pa2",                   limit: 24
    t.float    "tm_u_pa2",                   limit: 24
    t.float    "tm_p_pa3",                   limit: 24
    t.float    "tm_u_pa3",                   limit: 24
    t.float    "tm_p_pp1",                   limit: 24
    t.float    "tm_u_pp1",                   limit: 24
    t.float    "tm_p_pp2",                   limit: 24
    t.float    "tm_u_pp2",                   limit: 24
    t.float    "tm_p_pp3",                   limit: 24
    t.float    "tm_u_pp3",                   limit: 24
    t.float    "tm_p_pk1",                   limit: 24
    t.float    "tm_u_pk1",                   limit: 24
    t.float    "tm_p_pk2",                   limit: 24
    t.float    "tm_u_pk2",                   limit: 24
    t.float    "tm_p_pk3",                   limit: 24
    t.float    "tm_u_pk3",                   limit: 24
    t.float    "tm_p_t1",                    limit: 24
    t.float    "tm_u_t1",                    limit: 24
    t.float    "tm_p_prostasia",             limit: 24
    t.float    "timi_m_p_prostasia",         limit: 24
    t.string   "main_color_eksw_id"
    t.float    "super_apli_timi",            limit: 24
    t.text     "avatar"
    t.string   "typos_code"
    t.string   "tzamia0"
    t.float    "tm_p_tzami0",                limit: 24
    t.float    "tm_u_tzami0",                limit: 24
    t.float    "timi_m_tzami0",              limit: 24
    t.float    "price_tzamiou0",             limit: 24
    t.integer  "tzami0_cat"
    t.integer  "tzami1_cat"
    t.integer  "tzami2_cat"
    t.string   "pd1_code"
    t.string   "pd2_code"
    t.string   "pd3_code"
    t.string   "pa1_code"
    t.string   "pa2_code"
    t.string   "pa3_code"
    t.string   "pp1_code"
    t.string   "pp2_code"
    t.string   "pp3_code"
    t.string   "pk1_code"
    t.string   "pk2_code"
    t.string   "pk3_code"
    t.string   "klap"
    t.string   "deroll"
    t.integer  "order"
    t.integer  "default"
    t.float    "xwrisma4_1",                 limit: 24
    t.float    "xwrisma4_2",                 limit: 24
    t.float    "xwrisma4_3",                 limit: 24
    t.float    "xwrisma4_4",                 limit: 24
    t.float    "surcharge_line",             limit: 24
    t.float    "surcharge_color",            limit: 24
    t.float    "surcharge_color_eksw",       limit: 24
    t.string   "window_still"
    t.float    "timi_m_window_still",        limit: 24
    t.float    "price_window_still",         limit: 24
    t.string   "place"
    t.float    "timi_m_place",               limit: 24
    t.float    "price_place",                limit: 24
    t.string   "m_window_still"
    t.string   "m_place"
    t.float    "price_market",               limit: 24
    t.float    "price_dealer",               limit: 24
    t.string   "window_still_code"
    t.string   "place_code"
    t.binary   "base64_code",                limit: 2147483647
  end

  create_table "panels", force: true do |t|
    t.string   "name"
    t.string   "image"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "direction"
    t.string   "sungate_code"
    t.float    "price",        limit: 24
  end

  create_table "paraggelia", force: true do |t|
    t.integer  "user"
    t.integer  "customer"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "done"
    t.float    "sum",          limit: 24
    t.text     "eponimo"
    t.text     "name"
    t.text     "company"
    t.integer  "pososto"
    t.float    "meta_pososto", limit: 24
    t.integer  "pososto_sun"
    t.integer  "metaforika"
    t.text     "avatar"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "persides", force: true do |t|
    t.string   "name"
    t.float    "price",        limit: 24
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "pfm_rolls", force: true do |t|
    t.string   "name"
    t.float    "price",        limit: 24
    t.string   "sungate_code"
    t.integer  "order"
    t.string   "unit"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "places", force: true do |t|
    t.string   "name"
    t.float    "price",        limit: 24
    t.string   "unit"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "sungate_code"
  end

  create_table "pricelists", force: true do |t|
    t.integer "width"
    t.integer "height"
    t.float   "price",   limit: 24
    t.float   "code",    limit: 24
    t.integer "order"
    t.integer "default"
  end

  create_table "profils", force: true do |t|
    t.string   "name"
    t.float    "price",      limit: 24
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "width"
    t.integer  "height"
    t.string   "code"
    t.integer  "category"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "pse_users", force: true do |t|
    t.text     "name"
    t.text     "eponimo"
    t.text     "address"
    t.text     "company"
    t.text     "phone"
    t.text     "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "done"
    t.text     "user_id"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "pss_rolls", force: true do |t|
    t.string   "name"
    t.float    "price",        limit: 24
    t.string   "sungate_code"
    t.integer  "order"
    t.string   "unit"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rat_rolls", force: true do |t|
    t.text     "name",         limit: 2147483647
    t.float    "price",        limit: 24
    t.string   "sungate_code"
    t.integer  "order"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "unit"
  end

  create_table "rdm_rolls", force: true do |t|
    t.string   "name"
    t.float    "price",        limit: 24
    t.string   "sungate_code"
    t.integer  "order"
    t.string   "unit"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rlt_rolls", force: true do |t|
    t.string   "name"
    t.float    "price",        limit: 24
    t.string   "sungate_code"
    t.integer  "order"
    t.string   "unit"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rola_colors", force: true do |t|
    t.string   "name"
    t.string   "image"
    t.string   "code"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "profil_id",  limit: 11
    t.integer  "order"
    t.integer  "default"
  end

  create_table "rola_eksos", force: true do |t|
    t.string   "name"
    t.float    "height",       limit: 24
    t.float    "width",        limit: 24
    t.float    "price",        limit: 24
    t.integer  "rola_ekso_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "rola_epiks", force: true do |t|
    t.string   "name"
    t.float    "height",          limit: 24
    t.float    "width",           limit: 24
    t.float    "price",           limit: 24
    t.integer  "epikathimeno_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
    t.string   "en"
    t.string   "de"
    t.string   "gr"
    t.string   "sungate_code"
  end

  create_table "roll_guides", force: true do |t|
    t.string   "name"
    t.float    "price",        limit: 24
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "sessions", force: true do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], name: "index_sessions_on_session_id", unique: true, using: :btree
  add_index "sessions", ["updated_at"], name: "index_sessions_on_updated_at", using: :btree

  create_table "simple_user_pses", force: true do |t|
    t.text     "name"
    t.text     "eponimo"
    t.text     "address"
    t.text     "company"
    t.text     "phone"
    t.text     "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.float    "done",         limit: 24
    t.integer  "cust_no"
    t.text     "mr"
    t.text     "city"
    t.integer  "postal_code"
    t.text     "country_code"
    t.text     "mobile"
    t.text     "fax"
    t.integer  "VAT"
    t.text     "dealer_num"
    t.text     "sungate_num"
    t.integer  "pososto"
    t.integer  "pososto_sun"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "supplier_panels", force: true do |t|
    t.string   "name"
    t.string   "panel"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "system_lines", force: true do |t|
    t.integer  "system_id"
    t.integer  "line_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "system_open_types", force: true do |t|
    t.integer  "open_type_id"
    t.integer  "line_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "systems", force: true do |t|
    t.string   "name"
    t.integer  "constructor_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "lines"
    t.integer  "order"
    t.integer  "default"
    t.string   "csv"
    t.string   "sungate_code"
  end

  create_table "termsops", force: true do |t|
    t.text     "num"
    t.text     "text"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
  end

  create_table "translation_center_categories", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "translation_center_translation_keys", force: true do |t|
    t.string   "name"
    t.integer  "category_id"
    t.datetime "last_accessed"
    t.string   "de_status",     default: "untranslated"
    t.string   "en_status",     default: "untranslated"
    t.string   "gr_status",     default: "untranslated"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "translation_center_translation_keys", ["name"], name: "index_translation_center_translation_keys_on_name", using: :btree

  create_table "translation_center_translations", force: true do |t|
    t.integer  "translation_key_id"
    t.text     "value"
    t.string   "lang"
    t.integer  "translator_id"
    t.string   "translator_type"
    t.string   "status",             default: "pending"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "translation_center_translations", ["translation_key_id"], name: "index_translation_center_translations_on_translation_key_id", using: :btree

  create_table "typoi_prostasia", force: true do |t|
    t.text     "name"
    t.float    "price",        limit: 24
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "tzamia", force: true do |t|
    t.string   "name"
    t.float    "price",         limit: 24
    t.integer  "cat_tzamia_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "category"
    t.integer  "order"
    t.integer  "default"
    t.string   "sungate_code"
  end

  create_table "users", force: true do |t|
    t.string   "email",                             default: ""
    t.string   "encrypted_password",                default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                     default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "name"
    t.text     "epitheto"
    t.text     "company"
    t.text     "phone"
    t.text     "region"
    t.integer  "admin_id"
    t.integer  "admin"
    t.integer  "done"
    t.text     "address1"
    t.text     "address2"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.text     "sungate_name"
    t.text     "sungate_code"
    t.integer  "order"
    t.integer  "default"
    t.float    "pososto",                limit: 24
    t.float    "pososto_dealer",         limit: 24
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "votes", force: true do |t|
    t.integer  "votable_id"
    t.string   "votable_type"
    t.integer  "voter_id"
    t.string   "voter_type"
    t.boolean  "vote_flag"
    t.string   "vote_scope"
    t.integer  "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope", using: :btree
  add_index "votes", ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope", using: :btree

  create_table "window_still_cats", force: true do |t|
    t.string   "name"
    t.string   "sungate_code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "window_still_sub_cats", force: true do |t|
    t.string   "name"
    t.string   "sungate_code"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "window_still_cat_id"
    t.integer  "order"
  end

  create_table "window_stills", force: true do |t|
    t.string   "name"
    t.float    "price",               limit: 24
    t.integer  "window_still_cat_id"
    t.string   "sungate_code"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "unit"
  end

end
