type FilterProps = {
  wifiOnly: boolean;
  onWifiOnly: (value: boolean) => void;
};


export default function Filter({wifiOnly,onWifiOnly}: FilterProps) {
  return (
    <label>
      <input
        type="checkbox"
        checked={wifiOnly}
        onChange={(e) => onWifiOnly(e.target.checked)}
      />
      Wi-Fiありのみ
    </label>
  );
}