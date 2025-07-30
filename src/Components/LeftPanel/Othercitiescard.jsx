

export function Othercitiescard({city, description, Icon, temp}) {
  return (
     <div className="city-card p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <p className="fw-medium mb-1">{city}</p>
                          <p className="small text-muted-light mb-0">
                            {description}
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                          {Icon}
                          <span className="temperature-medium">
                            {temp}°
                          </span>
                        </div>
                      </div>
                    </div>
  )
}

