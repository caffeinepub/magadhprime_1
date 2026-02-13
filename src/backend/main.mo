import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";

actor {
  // 3 minute cooldown in nanoseconds
  let cooldownTime = 3 * 60 * 1_000_000_000;

  let lastActionTimes = Map.empty<Text, Time.Time>();

  public shared ({ caller }) func canPerformAction(deviceId : Text) : async Bool {
    let now = Time.now();
    switch (lastActionTimes.get(deviceId)) {
      case (null) {
        lastActionTimes.add(deviceId, now);
        true;
      };
      case (?lastTime) {
        if (now - lastTime > cooldownTime) {
          lastActionTimes.add(deviceId, now);
          true;
        } else {
          false;
        };
      };
    };
  };

  public shared ({ caller }) func recordAction(deviceId : Text) : async () {
    lastActionTimes.add(deviceId, Time.now());
  };
};
