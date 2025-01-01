import "../Components_styles/carousel.css";
function ContentScrollerDisp() {
  return (
    <div >
        
        <h2 className="text-center mb-5">Get Events & Updates</h2>
      <div className="body-schedule bg-dark">
        <div
          className="scroll-container"
          onmouseout="this.querySelector('.scroll-content').style.animationPlayState='running'"
          onmouseover="this.querySelector('.scroll-content').style.animationPlayState='paused'"
        >
          <div className="scroll-content">
            <div className="event-item">
              <div className="event-time">02:30-03:00 hrs</div>
              <div className="event-description">Suprabhatam</div>
            </div>
            <div className="event-item">
              <div className="event-time">03:30 - 04:00 hrs</div>
              <div className="event-description">Thomala Seva (Ekantam)</div>
            </div>
            <div className="event-item">
              <div className="event-time">04:00 - 04:15 hrs</div>
              <div className="event-description">
                Koluvu and Panchanga Sravanam (Ekantam)
              </div>
            </div>
            <div className="event-item">
              <div className="event-time">04:00 - 04:30 hrs</div>
              <div className="event-description">
                First Archana, Sahasranama Archana (Ekantam)
              </div>
            </div>
            <div className="event-item">
              <div className="event-time">06:30- 07:00 hrs</div>
              <div className="event-description">
                FirstBell, Bali and Sattumura
              </div>
            </div>
            <div className="event-item">
              <div className="event-time">07:00 - 07:30 hrs</div>
              <div className="event-description">
                Suddhi Second Archana (Ekantam), SecondBell, etc.
              </div>
            </div>
            <div className="event-item">
              <div className="event-time">07:30 - 19:00 hrs</div>
              <div className="event-description">Darshanam</div>
            </div>
            <div className="event-item">
              <div className="event-time">12:00 - 17:00 hrs</div>
              <div className="event-description">
                Kalyanostavam, Brahmostavam, Vasanthostavam, Unjal Seva
              </div>
            </div>
            <div className="event-item">
              <div className="event-time">17:30 - 18:30 hrs</div>
              <div className="event-description">
                Sahasra Deepalankarana Seva
              </div>
            </div>
            <div className="event-item">
              <div className="event-time">19:00 - 20:00 hrs</div>
              <div className="event-description">
                Suddhi, Night Kainkaryams (Ekantam) and Night Bell
              </div>
            </div>
            <div className="event-item">
              <div className="event-time">20:00 - 00:30 hrs</div>
              <div className="event-description">Darshanam</div>
            </div>
            <div className="event-item">
              <div className="event-time">00:30 - 00:45 hrs</div>
              <div className="event-description">
                Suddi and preparations for Ekanta Seva
              </div>
            </div>
            <div className="event-item">
              <div className="event-time">00:45 hrs</div>
              <div className="event-description">Ekanta Seva</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContentScrollerDisp;
