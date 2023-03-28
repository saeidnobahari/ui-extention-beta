//
//  Products.swift
//  with-swift
//
//  Created by Craig Tweedy on 28/12/2021.
//

import Foundation

extension GraphQLOperation {
    static var LIST_PRODUCTS: Self {
        GraphQLOperation(
                    """
                        {
                            products {
                                id
                                name
                                description
                                price
                            }
                        }
                    """
        )
    }
}
