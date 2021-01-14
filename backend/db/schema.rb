# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_14_162452) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collaborate_requests", force: :cascade do |t|
    t.integer "project_id"
    t.integer "requester_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.integer "project_id"
    t.integer "commenter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "blurb"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "project_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "blurb"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "story"
    t.integer "timeline"
    t.integer "fundraising_goal"
    t.string "image"
    t.string "github"
    t.string "language"
    t.string "stage"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "replies", force: :cascade do |t|
    t.integer "post_id"
    t.integer "replier_id"
    t.string "reply"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "supporterships", force: :cascade do |t|
    t.integer "project_id"
    t.integer "supporter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "location"
    t.bigint "commenter_id"
    t.bigint "supporter_id"
    t.bigint "requester_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "profile_pic"
    t.string "bio"
    t.index ["commenter_id"], name: "index_users_on_commenter_id"
    t.index ["requester_id"], name: "index_users_on_requester_id"
    t.index ["supporter_id"], name: "index_users_on_supporter_id"
  end

  add_foreign_key "users", "users", column: "commenter_id"
  add_foreign_key "users", "users", column: "requester_id"
  add_foreign_key "users", "users", column: "supporter_id"
end
