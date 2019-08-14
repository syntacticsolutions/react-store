import React, { useMemo } from 'react'

export default ({ items, storeConfig }) => {
    const memoizedImageConfig = useMemo(() => storeConfig.find(el => el.type === 'preview'), [storeConfig])

    return (
        <section className="item-grid">
        {   
            items.length && items.map((itemObj, key) => 
                <div className="item-card"
                    key={key}
                >
                    <div
                        className="item-card-value-container"
                    >
                        <figure>
                            <p
                                className="item-title"
                                style={{ width: `${ memoizedImageConfig.sm[1] - 1 }px` }}
                            >{ itemObj.title }</p>
                            <img
                                src={itemObj.image}
                                width={`${memoizedImageConfig.sm[1]}px`}
                                height={`${memoizedImageConfig.sm[0]}px`}
                                alt={itemObj.title + '_image'}
                            />
                        </figure>
                        <p
                            className="item-price"
                            style={{ width: `${ memoizedImageConfig.sm[1] - 11 }px` }}
                        >{ itemObj.price }</p>
                    </div>
                </div>
            )
        }
        </section>
    )
}