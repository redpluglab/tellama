// macOS: swift scripts/generate-download-qr.swift
// The QR always opens the latest release, never an obsolete APK asset.
import AppKit
import CoreImage
import Foundation

let latestReleaseURL = "https://github.com/redpluglab/tellama/releases/latest"
let outputPath = "assets/download-qr.png"
let moduleScale: CGFloat = 8
let filter = CIFilter(name: "CIQRCodeGenerator")!
filter.setValue(Data(latestReleaseURL.utf8), forKey: "inputMessage")
filter.setValue("M", forKey: "inputCorrectionLevel")
let code = filter.outputImage!.transformed(by: CGAffineTransform(scaleX: moduleScale, y: moduleScale))
let quietZone = moduleScale * 4
let bounds = code.extent.insetBy(dx: -quietZone, dy: -quietZone)
let white = CIImage(color: CIColor.white).cropped(to: bounds)
let cgImage = CIContext().createCGImage(code.composited(over: white), from: bounds)!
let bitmap = NSBitmapImageRep(cgImage: cgImage)
try bitmap.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: outputPath))
print("QR generated for \(latestReleaseURL)")
