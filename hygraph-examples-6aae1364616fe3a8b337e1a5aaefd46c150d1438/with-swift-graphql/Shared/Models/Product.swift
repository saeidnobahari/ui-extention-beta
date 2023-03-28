//
//  Product.swift
//  with-swift-graphql
//
//  Created by Craig Tweedy on 28/12/2021.
//

import Foundation

struct Product: Decodable, Identifiable {
    var id: String = UUID().uuidString
    let name: String
    let description: String
    let price: Int
}
