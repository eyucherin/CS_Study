interface Image {
    void display();
}

// Class
class HighResolutionImage implements Image {
    private String filename;

    public HighResolutionImage(String filename) {
        this.filename = filename;
        loadImageFromDisk();
    }

    private void loadImageFromDisk() {
        // Expensive operation to load image
    }

    @Override
    public void display() {
        System.out.println("Displaying " + filename);
    }
}

// Proxy
class ImageProxy implements Image {
    private HighResolutionImage realImage;
    private String filename;

    public ImageProxy(String filename) {
        this.filename = filename;
    }

    @Override
    public void display() {
        if (realImage == null) {
            realImage = new HighResolutionImage(filename);
        }
        realImage.display();
    }
}

// Client
public class ProxyDemo {
    public static void main(String[] args) {
        Image image = new ImageProxy("test.jpg");
        // No actual loading happens yet
        image.display(); // Image is loaded and displayed here
    }
}
