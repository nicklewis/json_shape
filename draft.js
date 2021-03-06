{
  // base types are string, number, true, false, null, undefined, object, array
  "monkey": "string",
  "foo": ["enum", {"values": ["a","b","c"]}],
  "elephant": ["array",
                {
                  "contents": "monkey"
                }
              ],
  "thing": ["either", {"choices": ["foo", "elephant"]}],
  "bar": ["tuple", {"elements": ["monkey","elephant"]}],
  "blurble": ["object", {"members": {"x": "number", "y": "number"}}],
  "foe": ["integer"],
  "fum": ["integer", {}]
}
