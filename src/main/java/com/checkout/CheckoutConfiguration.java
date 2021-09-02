package com.checkout;

import org.apache.http.impl.client.HttpClientBuilder;

import java.net.URI;

import static com.checkout.Environment.lookup;
import static com.checkout.PlatformType.DEFAULT;
import static com.checkout.PlatformType.FOUR;
import static com.checkout.common.CheckoutUtils.validateParams;

public final class CheckoutConfiguration {

    private PlatformType platformType;
    private String secretKey;
    private String publicKey;

    /**
     * @deprecated Will be removed in a future version
     */
    @Deprecated
    private final String uri;

    private HttpClientBuilder apacheHttpClientBuilder;

    public CheckoutConfiguration(final String publicKey, final String secretKey, final Environment environment) {
        validateParams("environment", environment);
        this.uri = environment.getUri();
        validateAndSetKeys(publicKey, secretKey, FOUR);
    }

    public CheckoutConfiguration(final String publicKey, final String secretKey, final URI uri) {
        validateParams("uri", uri);
        this.uri = uri.toString();
        validateAndSetKeys(publicKey, secretKey, FOUR);
    }

    public CheckoutConfiguration(final String secretKey, final boolean useSandbox) {
        this(null, secretKey, lookup(useSandbox).getUri());
    }

    public CheckoutConfiguration(final String secretKey, final boolean useSandbox, final String publicKey) {
        this(publicKey, secretKey, lookup(useSandbox).getUri());
    }

    public CheckoutConfiguration(final String secretKey, final String uri) {
        this(null, secretKey, uri);
    }

    private CheckoutConfiguration(final String publicKey, final String secretKey, final String uri) {
        validateParams("uri", uri);
        this.uri = uri;
        validateAndSetKeys(publicKey, secretKey, DEFAULT);
    }

    private void validateAndSetKeys(final String publicKey, final String secretKey, final PlatformType platformType) {
        validateParams("platformType", platformType);
        if (publicKey != null) {
            platformType.validatePublicKey(publicKey);
            this.publicKey = publicKey;
        }
        platformType.validateSecretKey(secretKey);
        this.platformType = platformType;
        this.secretKey = secretKey;
    }

    public PlatformType getCustomerPlatformType() {
        return platformType;
    }

    public String getSecretKey() {
        return secretKey;
    }

    public String getPublicKey() {
        return publicKey;
    }

    public void setPublicKey(final String publicKey) {
        DEFAULT.validatePublicKey(publicKey);
        this.publicKey = publicKey;
    }

    public String getUri() {
        return uri;
    }

    public HttpClientBuilder getApacheHttpClientBuilder() {
        return apacheHttpClientBuilder;
    }

    public void setApacheHttpClientBuilder(final HttpClientBuilder apacheHttpClientBuilder) {
        this.apacheHttpClientBuilder = apacheHttpClientBuilder;
    }

}
