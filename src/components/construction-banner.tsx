type ConstructionBannerProps = {
  message: string;
};

export default function ConstructionBanner({ message }: ConstructionBannerProps) {
  return (
    <aside className="construction-banner" aria-label="Page under construction">
      <span className="construction-indicator" aria-hidden="true" />
      <div>
        <p className="construction-title">This page is still taking shape</p>
        <p className="construction-message">{message}</p>
      </div>
    </aside>
  );
}