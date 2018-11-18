import test from "ava";
import request from "supertest";
import app from "../app";

test("Get store's index", async t => {
  const store = { name: "Test Store", address: "Berlin"}

  const creation = await request(app)
    .post("/stores/new")
    .send(store)

  const response = await request(app).get("/stores")

  t.is(response.status, 200)
  // t.true(Array.isArray(response.body), "Body should be an array")
  t.true(response.body.length > 0)
})